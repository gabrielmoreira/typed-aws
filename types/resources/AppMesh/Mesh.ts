// CloudFormation Resource AWS::AppMesh::Mesh

import { CfnResource, Resolvable } from '../../base';

export type Mesh_Type = 'AWS::AppMesh::Mesh';
export const Mesh_Type = 'AWS::AppMesh::Mesh';

/**
 * Resource Type definition for AWS::AppMesh::Mesh {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html}
 */
export default function Mesh(props: Mesh_Properties) {
  return new CfnResource<Mesh_Properties>(Mesh_Type, props);
}

/**
 * Resource Type definition for AWS::AppMesh::Mesh {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html}
 */
export type Mesh_Properties = {
  Uid?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-meshname}
   */
  MeshName?: Resolvable<string>;
  MeshOwner?: Resolvable<string>;
  ResourceOwner?: Resolvable<string>;
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-spec}
   */
  Spec?: MeshSpec;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html}
 */
export type MeshSpec = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html#cfn-appmesh-mesh-meshspec-egressfilter}
   */
  EgressFilter?: EgressFilter;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html}
 */
export type EgressFilter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html#cfn-appmesh-mesh-egressfilter-type}
   */
  Type: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
